// Simple BibTeX parser for publications
export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: string[];
  journal?: string;
  venue?: string;
  year: number;
  month?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  abstract?: string;
  selected?: boolean;
  preview?: string;
}

export function parseBibFile(content: string): Publication[] {
  const publications: Publication[] = [];
  
  // Remove the Jekyll front matter if present
  content = content.replace(/^---[\s\S]*?---/, '').trim();
  
  // Match each entry
  const entryRegex = /@(\w+)\s*\{\s*([^,]+),\s*([\s\S]*?)(?=\n@|\n*$)/g;
  let match;
  
  while ((match = entryRegex.exec(content)) !== null) {
    const type = match[1].toLowerCase();
    const key = match[2].trim();
    const fieldsStr = match[3];
    
    if (type === 'string') continue; // Skip @string definitions
    
    const fields: Record<string, string> = {};
    
    // Parse fields - handle multi-line values in braces
    const fieldRegex = /(\w+)\s*=\s*(?:\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}|"([^"]*)"|(\d+))/g;
    let fieldMatch;
    
    while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
      const fieldName = fieldMatch[1].toLowerCase();
      const value = fieldMatch[2] || fieldMatch[3] || fieldMatch[4] || '';
      fields[fieldName] = value.trim();
    }
    
    // Parse authors
    const authorsStr = fields.author || '';
    const authors = authorsStr
      .split(' and ')
      .map(a => {
        // Handle "Last, First" format
        if (a.includes(',')) {
          const parts = a.split(',').map(p => p.trim());
          return `${parts[1]} ${parts[0]}`;
        }
        return a.trim();
      })
      .filter(a => a.length > 0);
    
    const publication: Publication = {
      key,
      type,
      title: fields.title?.replace(/[{}]/g, '') || '',
      authors,
      journal: fields.journal?.replace(/[{}]/g, ''),
      venue: fields.journal?.replace(/[{}]/g, ''),
      year: parseInt(fields.year) || 0,
      month: fields.month,
      volume: fields.volume,
      issue: fields.issue,
      pages: fields.pages,
      doi: fields.doi?.replace(/^https?:\/\/doi\.org\//, ''),
      url: fields.url,
      abstract: fields.abstract?.replace(/[{}]/g, ''),
      selected: fields.selected === 'true',
      preview: fields.preview,
    };
    
    publications.push(publication);
  }
  
  // Sort by year descending
  return publications.sort((a, b) => b.year - a.year);
}

export function getSelectedPublications(publications: Publication[]): Publication[] {
  return publications.filter(p => p.selected);
}
