---
layout: layouts/page.njk
templateEngineOverride: njk,md
date: Last Modified
hideTitle: true
navi:
  key: test5
  parent: test4
---

{% set lastDate = [] %}
{% macro renderNavListItem(entry) -%}
{% set title = entry.key | safe | splitWords | capitalize %}
{% set smolDate = entry.page.date | nchrsDate %}
{% set lastDate = lastDate.push(smolDate) %}
{% if entry.children.length %}
{% for child in entry.children %}
{{ renderNavListItem(child) }}
{% endfor -%}
{%- endif -%}
{%- endmacro %}



{% macro newestDate(entry) -%}
{% set number = number + 1 %}
{% if entry.children.length %}
{% for child in entry.children %}
{{ newestDate(child) }}

{% endfor -%}
{%- endif -%}
{%- endmacro %}



{% set navPages = collections.all | navi | reverse %}

{% for entry in navPages %}

{{ renderNavListItem(entry) }}
{% endfor %} 


{{ lastDate | newestDate }}