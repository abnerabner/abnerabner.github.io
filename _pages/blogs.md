---
title: "Blogs"
permalink: /blogs/
layout: default
author_profile: false
---

# ✍ My Blogs

<div class="blogs-list">
{% for blog in site.blogs %}
  <article class="blog-item">
    <div class="blog-header">
      <h3><a href="{{ blog.url | relative_url }}">{{ blog.title }}</a></h3>
      <span class="blog-date">{{ blog.date | date: "%Y-%m-%d" }}</span>
    </div>
    
    {% if blog.image %}
      <div class="blog-image">
        <img src="{{ blog.image | relative_url }}" alt="{{ blog.title }}">
      </div>
    {% endif %}
    
    <p class="blog-excerpt">{{ blog.excerpt | strip_html | truncate: 150 }}</p>
  </article>
{% endfor %}
</div>
