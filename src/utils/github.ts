// Fetches live star/fork counts for GitHub repositories at build time.
// Falls back to caller-supplied values on any error so a GitHub outage or
// rate limit never breaks the build.

export interface RepoStats {
  stars: number;
  forks: number;
}

export async function getRepoStats(
  owner: string,
  repo: string,
  fallback: RepoStats
): Promise<RepoStats> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'group-website-build'
      }
    });

    if (!res.ok) {
      console.warn(`[github] ${owner}/${repo}: HTTP ${res.status} ${res.statusText}`);
      return fallback;
    }

    const data = await res.json();
    return {
      stars: typeof data.stargazers_count === 'number' ? data.stargazers_count : fallback.stars,
      forks: typeof data.forks_count === 'number' ? data.forks_count : fallback.forks
    };
  } catch (err) {
    console.warn(`[github] ${owner}/${repo}: fetch failed`, err);
    return fallback;
  }
}

export function parseGitHubRepoUrl(url: string): { owner: string; repo: string } | null {
  try {
    const u = new URL(url);
    if (u.hostname !== 'github.com' && u.hostname !== 'www.github.com') return null;
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1].replace(/\.git$/, '') };
  } catch {
    return null;
  }
}
