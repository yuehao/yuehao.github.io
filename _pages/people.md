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
