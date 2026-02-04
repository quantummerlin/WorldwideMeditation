---
layout: page
title: Updates
subtitle: Latest developments and news
permalink: /updates/
---

<div class="container" markdown="1">

## Latest Updates

All posts are listed below in chronological order, newest first.

<div class="posts-grid">
{% for post in site.posts %}
<article class="post-card">
    {% if post.featured_image %}
    <div class="card-image">
        <img src="{{ post.featured_image }}" alt="{{ post.title }}">
    </div>
    {% endif %}
    <div class="card-content">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        {% if post.summary %}
        <p>{{ post.summary | truncate: 150 }}</p>
        {% endif %}
        {% if post.categories %}
        <div class="post-categories" style="margin-top: 1rem;">
            {% for category in post.categories %}
            <span class="category-tag" style="font-size: 0.75rem;">{{ category }}</span>
            {% endfor %}
        </div>
        {% endif %}
    </div>
</article>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="alert alert-info">
<p><strong>No updates yet.</strong></p>
<p>Check back soon for the latest developments in this case.</p>
</div>
{% endif %}

---

## Categories

Browse updates by category:

- **Legal** — Court proceedings, legal strategy updates
- **Evidence** — New evidence and documentation
- **Media** — Press coverage and interviews
- **Action** — Campaigns and calls to action
- **International** — Diplomatic developments

---

## Stay Informed

Bookmark this page and check back regularly for updates.

Share updates using **#TruthProtectsTheInnocent**

<div class="text-center mt-3">
<a href="/action/" class="btn btn-primary">Take Action</a>
<a href="/" class="btn btn-outline">Return Home</a>
</div>

</div>