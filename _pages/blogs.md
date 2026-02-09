---
title: "Blogs"
permalink: /blogs/
layout: default
author_profile: true
---

## My Blogs 

{% for blog in site.blogs %}
  <article>
    <h3><a href="{{ blog.url | relative_url }}">{{ blog.title }}</a></h3>
    <p>{{ blog.date | date: "%Y-%m-%d" }}</p>
    <p>{{ blog.excerpt }}</p>
  </article>
{% endfor %}
