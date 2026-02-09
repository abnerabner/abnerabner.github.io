---
title: "Blogs"
permalink: /blogs/
layout: default
author_profile: true
---

# ✍ My Blogs

<div class="blogs-grid">
{% for blog in site.blogs %}
  <article class="blog-card">
    <a href="{{ blog.url | relative_url }}">
      {% if blog.image %}
        <div class="blog-image">
          <img src="{{ blog.image | relative_url }}" alt="{{ blog.title }}">
        </div>
      {% endif %}
      <div class="blog-info">
        <h3>{{ blog.title }}</h3>
        <p class="blog-date">{{ blog.date | date: "%Y-%m-%d" }}</p>
        <p class="blog-excerpt">{{ blog.excerpt | strip_html | truncate: 100 }}</p>
      </div>
    </a>
  </article>
{% endfor %}
</div>
