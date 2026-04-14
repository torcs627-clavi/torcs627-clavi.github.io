---
layout: default
title: All Articles
description: Full archive of markdown articles.
permalink: /articles/
---

<section id="articles-archive">
  <h2 class="section-title">All Articles</h2>
  <div class="articles-intro">
    <p>
      All published posts are listed below. New Markdown files added to
      <code>_posts/</code> will appear here automatically.
    </p>
  </div>

  <div class="articles-grid">
    {% if site.posts and site.posts.size > 0 %}
      {% for post in site.posts %}
      <article class="article-card">
        <div class="article-meta">{{ post.date | date: "%b %d, %Y" }}</div>
        <h3 class="article-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        {% if post.excerpt %}
        <p class="article-excerpt">{{ post.excerpt | strip_html | truncate: 180 }}</p>
        {% endif %}
        <a class="article-read-more" href="{{ post.url | relative_url }}">Read Article ↗</a>
      </article>
      {% endfor %}
    {% else %}
      <div class="articles-empty">
        No articles yet. Create your first Markdown post in <code>_posts/</code>.
      </div>
    {% endif %}
  </div>

  <div class="articles-actions">
    <a class="btn btn-outline" href="{{ '/' | relative_url }}#articles">Back to Home</a>
  </div>
</section>
