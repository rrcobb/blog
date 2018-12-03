#!/usr/bin/env ruby
require 'date'

puts "Let's make a new post!\n"
puts "Title: "
title = gets.chomp

puts "Description: "
description = gets.chomp

today = DateTime.now
puts "Date (default today, #{today}): "
date = gets.chomp
case date
when ""
  date = today
else
  date = DateTime.parse(date)
end

puts "Tags (comma separated):"
tags = gets.split(',').map(&:strip)

default_path = "./src/pages/posts"
puts "Where to save it? (default #{default_path})"
path = gets.chomp
if path == ""
  path = default_path
end
filename = "#{path}/#{date.strftime('%Y-%m-%d')}-#{title.downcase.split(/[^\w]/).reject(&:empty?).join('-')}.md"

post = <<-POST
---
layout: post
title: #{title}
description: #{description}
date: #{date}
tags: [#{tags.join(', ')}]
---
POST

puts post


File.write filename, post

puts "Written to #{filename}"
