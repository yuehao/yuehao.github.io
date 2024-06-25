---
layout: page
title: People
permalink: /people/
description: 
nav: true
nav_order: 6
display_categories: [Current, Alumni]
horizontal: true
---

<!-- pages/teaching.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <!--<a id="{{ category }}" href=".#{{ category }}">-->
    <h2 class="category">{{ category }}</h2>
  <!--</a>-->
  {% assign categorized_people = site.people | where: "category", category %}
  {% assign sorted_people = categorized_people | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container px-0">
    <div class="row g-1 row-cols-1 row-cols-md-3">
    {% for project in sorted_people %}
      {% include people_horizontal.liquid %}
    {% endfor %}
    </div>
    
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-4">
    {% for project in sorted_people %}
      {% include people.liquid %}
    {% endfor %}
  </div>

  
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_people = site.people | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container px-0">
    <div class="row g-1 row-cols-1 row-cols-md-3">
    {% for people in sorted_people %}
      {% include people_horizontal.liquid %}
    {% endfor %}
    </div> 
  </div>
  {% else %}
 <div class="row row-cols-1 row-cols-md-4">
    {% for people in sorted_people %}
      {% include people.liquid %}
    {% endfor %}
  </div>
   
  {% endif %}
{% endif %}
</div>

<div class="projects">
<h2 class="category"> Undergraduate Researchers and Interns </h2>
</div>

      
* [Joshua Keeney](https://www.linkedin.com/in/josh-keeney-89576a258/), MSU (2024 Summer ASET Internship)
* [Kyla Hotton](https://www.linkedin.com/in/kyla-hotton-668100221/), MSU (2023 Summer ASET Internship) 
* [Jonathan Kho](https://www.linkedin.com/in/jonathan-kho-5945361b5/), MSU (2022 Summer ASET Internship) 
* [Shane Blade](https://www.linkedin.com/in/shane-blade-7a1a6322b/), Clemson U. (REU program 2021)
* [Jack Fenelon](https://www.linkedin.com/in/jack-fenelon-44b44b1b4/), MSU (2021 Summer ASET Internship) 
* [Julian Olejnik](https://www.linkedin.com/in/julian-olejnik-6603a5214/), MSU (2020 Summer ASET Internship)
    
 
