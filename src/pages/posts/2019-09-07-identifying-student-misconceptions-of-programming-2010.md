---
layout: post
title: Identifying Student Misconceptions of Programming (2010)
description: 
date: 2019-09-07T14:14:07-04:00
tags: [education, cs weekly, misconceptions, concept inventory, introductory cs]
---


In March, the Association for Computing Machinery (ACM) Special Interest Group on Computer Science Education (SIGCSE) [recognized ten symposium papers](https://www.eurekalert.org/pub_releases/2019-03/afcm-ttc022719.php) as the best, most interesting, most influential papers in its 50 year history. 

This 2010 paper from Kaczmarczyk, East, Petrick, and Herman is at the top of the list. [Identifying Student Misconceptions of Programming](/identifying-student-misconceptions-of-programming-2010.pdf) focuses on the particular confusions that students have about concepts in CS1. 

Getting into the weeds of what students don't understand is a project close to my heart, and the authors pursue a promising direction - the development of a _Concept Inventory_ - a diagnostic tool that teachers can use to figure out exactly what their students misunderstand. 

## Introduction

To folks with experience, misconceptions appear baffling. This phenomenon is familiar to anyone who's tried to teach anything they know pretty well. It's sometimes called the [Curse of Knowledge](https://en.wikipedia.org/wiki/Curse_of_knowledge) - you forget what it's like to be a beginner, so you end up using jargon that sounds easy to you, but is actually confusing. Some real teachers that I have heard use the word 'obvious' to describe concepts that they hadn't covered yet 🤦.  

It's helpful for any teacher to have a good sense of what their students actually believe about a subject before they try to teach more about it. Preconceptions, if not addressed, often lead to persistent confusion.

The paper describes the authors' attempt to build a 'Concept Inventory' for introductory programming in Java.

Concept Inventories have been [used in Physics classrooms](https://aapt.scitation.org/doi/10.1119/1.2343497) as a diagnostic pre-test. By identifying the particular misconceptions students have, teachers can take direct steps to remedy those misconceptions. Concept Inventory development involves finding out what students tend to misunderstand, so that you can develop a good pre-test tool.

> Perhaps their most critical contribution has been that instructors can use the inventory results to gain "on the ground" insight into not only the concepts their students are struggling with, but what specific misconceptions they hold

This paper is part of a larger project aimed at developing Concept Inventories for courses in programming, digital logic, and discrete structures (usually the first sequence of courses in a CS degree). In an earlier paper, [Identifying Important and Difficult Concepts in Introductory Computing Courses using a Delphi Process (2008)](/identifying-important-and-difficult-concepts-2008.pdf), the authors asked experts to identify the concepts that were important for students to learn in this course. In today's paper, they describe the next phase, where they interviewed students to get a sense of their misconceptions of those concepts.

## Study Design

> Eleven students took part in interviews conducted at the University of California, San Diego (UCSD) in spring 2009. Students were recruited from the undergraduate student population who were currently or recently enrolled in Computer Science or Computer Engineering introductory courses CSE8a or CSE11 (two versions of CS1).

The authors presented and discussed 18 problems covering 10 introductory CS concepts. Discussions used Java as the language of discussion, since that was what the students had been learning in their course.

The topics covered in the 18 problems were: 

> 1. Memory Model, References, and Pointers (MMR)
> 2. Primitive and Reference Type Variables (PVR)
> 3. Control Flow (CF)
> 4. Iteration and Loops I (IT1)
> 5. Types (TYP)
> 6. Conditionals (COND)
> 7. Assignment Statements (AS)
> 8. Arrays I (AR1)
> 9. Iteration and Loops II (IT2)
> 10. Operator Precedence (OP)

## Findings

Analyzing the interviews, the researchers identified particular common errors, then grouped the errors into themes. This qualitative analysis procedure draws from a social science practice known as _Grounded Theory_.

* Note: Grounded Theory, to me, is a formalism for making up categories after you've gathered data. It's billed as 'inductive' rather than 'hypothetico-deductive', meaning that in most science, you form a hypothesis and then test it, and in Grounded Theory, you get data first, then try to figure out what it means. I think it's the right process for analysis like this, where the possibility space is so big and weird that any pre-data theorizing is likely to be way off the mark. Still, the term is confusing, because it's not 'grounded' in any way that someone outside the social sciences might expect. See the [Grounded Theory Wikipedia Entry](https://en.wikipedia.org/wiki/Grounded_theory) for more.

### Themes of misunderstandings

> T1: Students misunderstand the relationship between language elements and underlying memory usage.

This one seems pretty natural - compilers are in fact very complicated, so understanding what they will do with your code is hard even for experts. I think the authors might actually be describing a set of Java-specific (and CS1-specific) misunderstandings about allocations and variables, which I... don't find that interesting, since I don't usually find it all that useful to think about the way that my variables are laid out in memory. I mostly teach Ruby and JavaScript though, so my bias is showing!

> T2: Students misunderstand the process of while loop operation.

Loops are fundamental, important, and *super challenging for beginners*! I'm excited that this is called out so explicitly, because I find that it's a topic that is prone to the curse of knowledge even more than most topics. Explaining and understanding while loops is surprisingly hard! 

> T3: Students lack a basic understanding of the Object concept.

I think this is why Java is a hard language for beginners. The last post on [sequencing programming skills](/posts/2019-06-23-a-theory-of-instruction-for-introductory-programming-skills-2019/) described how code reading and tracing precede code writing as skills. Object Oriented code is harder to read and trace than procedural code (for small programs), so it doesn't surprise me that this theme emerged.  \</rife speculation\>

> T4: Students cannot trace code linearly

Accords with my own experience, as well as tying back to the previous summary. Tracing is key - you have to be able to 'see' the sequence of steps that a program will follow in order to understand the logic.

### Particular misunderstandings

> Student applies real-world semantic understanding to variable declarations

I've seen this one _all the time_ in teaching programming to beginners. We use terms with specific definitions that differ from what newcomers expect. Examples in programming problems frequently have surprising differences from what a beginner would assume about their behavior and relationships based on the names alone.

This is frequently *more* true when teaching Object Oriented programming!

> MMR5:  Student thinks an array's construction goes from 0 to length, inclusive.
> PVR1:  Student thinks primitive types have no default value.

These are part of a series of particular misunderstandings about the syntax and semantics of Java.

They are tricky. Indexes starting at 0 always trips up beginners, since we are so used to starting counting at 1. Primitive type default values are weird, because other types don't behave the same way, so it's easy to get mixed up.


> MMR2 Student thinks all Objects are allocated the same amount of memory regardless of definition and instantiation.
> MMR3 Student thinks no memory is allocated for an instantiated Object.
> MMR4 Student thinks memory is allocated for an uninstantiated Object.
> PVR2 Student thinks primitives without a value have no memory allocated

Just a ton of specific student errors about Java's memory model!

I don't quite know how to feel about these. 

In learning Java as part of CS1, instructors find that it's important for students to know how the JVM will allocate memory. As variables are declared and assigned, there are some differences in behavior based on what's actually in memory. Since those instructors are preparing students for classes where they'll think more deeply about memory and engage with it directly, I suppose it's appropriate to start thinking about it in the first course in the sequence.

Still, I'm not convinced that the memory behavior of variable declarations matter - especially to beginners. 

We have the higher level abstraction of the language so that we don't have to think about memory allocation. Instead we can spend our [limited cognitive capacity](/posts/2019-06-18-the-expertise-reversal-effect/) focusing on application behavior. 'Which memory is allocated when' doesn't matter much to the student trying to get a program to compile and run correctly.

When I teach Ruby or JavaScript, I (almost) totally ignore the way that memory will be allocated, instead focusing on using the language to do things that we care about (usually string I/O for the command line, at least at first!). 

It's possible that it's a context difference - at summer camp or at a [bootcamp](https://flatironschool.com), it's more obvious that we need to keep students engaged with the content and motivated, and therefore need to do use the language to do things we care about. Still, CS1 courses have a ton of students drop out every semester, so maybe they should take a page out of our book.

## Conclusion

Object Oriented Programming and thinking about the computer's memory are hard, and I am personally suspicious of their importance when first learning programming syntax and semantics. They can be introduced later! Teaching them in CS1 means overloading and confusing students who are trying to learn how to accomplish simple tasks with while loops. 

Cataloguing errors and developing a concept inventory seems like a great idea. This process for developing the inventory (ask experts about what's important, interview students to find common misunderstandings) seems like a workable way of doing it. More teachers of more classes should develop Concept Inventories and diagnostic assessments and use them in the classroom to locate specific areas of confusion among their students.

It's also great to see CS Education researchers taking a page from other science teachers. There's a lot that teachers know about teaching (duh), and it's encouraging to see this kind of tools-and-techniques level cross-pollination.

All told, this seems like an interesting paper, but it didn't blow me away. Not quite sure how it ended up at the top of the SIGCSE list - maybe it's had lots of important influence and citations.

Here's to teachers finding and addressing the specific misunderstandings that their students face!
