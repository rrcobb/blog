---
layout: post
title: Identifying Student Misconceptions of Programming (2010)
description: 
date: 2019-09-07T14:14:07-04:00
tags: [education, cs weekly, misconceptions, concept inventory, introductory cs]
---


In March, The Association for Computing Machinery (ACM) Special Interest Group on Computer Science Education (SIGCSE) [recognized ten symposium papers](https://www.eurekalert.org/pub_releases/2019-03/afcm-ttc022719.php) as the best, most interesting and influential papers in its 50 year history. 

This 2010 paper from Kaczmarczyk, East, Petrick, and Herman comes in at number one. [Identifying Student Misconceptions of Programming](/identifying-student-misconceptions-of-programming-2010.pdf) focuses on the particular confusions that students have about concepts in CS1. 

Getting into the weeds of what students don't understand is a project close to my heart, and the authors pursue a promising direction - the development of a _Concept Inventory_. Concept Inventories are [used in Physics classrooms](https://aapt.scitation.org/doi/10.1119/1.2343497) as a diagnostic pre-test. By identifying the particular misconceptions students have, teachers can take direct steps to remedy those misconceptions. Concept Inventory development involves finding out what students tend to misunderstand, so that you can develop a good pre-test tool.


- to folks with experience, misconceptions appear baffling
- https://en.wikipedia.org/wiki/Curse_of_knowledge

- paper attempts to build a 'Concept Inventory'
    - concept inventory has been a useful technique for physics teachers
    - It's a pre-test or diagnostic assessment
    - helps teachers to identify starting point for learning

> Perhaps their most critical contribution has been that instructors can use the inventory results to gain “on the ground” insight into not only the concepts their students are struggling with, but what specific misconceptions they hold

- this paper is part of a larger project on developing concept inventories for programming, digital logic, and discrete structures
- Interviewed students to get a sense of their misconceptions

> Eleven students took part in interviews conducted at the University of California, San Diego (UCSD) in spring 2009. Students were recruited from the undergraduate student population who were currently or recently enrolled in Computer Science or Computer Engineering introductory courses CSE8a or CSE11 (two versions of CS1).

Presented and discussed 18 problems covering 10 introductory CS concepts. Discussions used Java as the language of discussion.

> 1. Memory Model, References, and Pointers (MMR)
2. Primitive and Reference Type Variables (PVR)
3. Control Flow (CF)
4. Iteration and Loops I (IT1)
5. Types (TYP)
6. Conditionals (COND)
7. Assignment Statements (AS)
8. Arrays I (AR1)
9. Iteration and Loops II (IT2)
10. Operator Precedence (OP)

Analyzing the interviews, the researchers identified particular common errors as well as themes of errors.

* Note: Grounded Theory seems like a formalism for making up categories after you have some qualitative data. I think it's the right process for things like this, but the term is confusing, because it's not 'grounded' in the sense that someone outside the social sciences might expect.

> T1: Students misunderstand the relationship between language elements and underlying memory usage.
T2: Students misunderstand the process of while loop operation.
T3: Students lack a basic understanding of the Object concept.
T4: Students cannot trace code linearly

Particular misunderstandings:

> Student applies real-world semantic understanding to variable declarations

I've seen this one all the time in teaching programming to beginners. We use terms with specific definitions that differ from what newcomers expect. Examples in programming problems frequently have surprising differences from what a beginner would assume about their behavior and relationships based on the names alone. This is frequently *more* true when teaching object oriented programming.

Several particular misunderstandings about the syntax and semantics of Java:

> MMR5:  Student thinks an array's construction goes from 0 to length, inclusive.
PVR1:   Student thinks primitive types have no default value.

These are tricky. Indexes starting at 0 always trips up beginners, since we are so used to starting counting at 1.

Then a ton of specific mental errors about Java's memory model:

> MMR2 Student thinks all Objects are allocated the same amount of memory regardless of definition and instantiation.
MMR3 Student thinks no memory is allocated for an instantiated Object.
MMR4 Student thinks memory is allocated for an uninstantiated Object.
PVR2 Student thinks primitives without a value have no memory allocated

I don't quite know how to feel about these. In learning Java as part of CS1, instructors find that it's important for students to know how the JVM will allocated memory as variables are declared and assigned. Since they are often preparing students for classes where they'll think more deeply about memory and engage with it directly, I suppose it's appropriate to start thinking about it in the first course in the sequence.

Still, I'm not convinced that it matters very much, especially to beginners. We have the higher level abstraction of the language so that we don't have to think about memory allocation and can instead focus on application behavior. Which memory is allocated when doesn't matter much when I'm just trying to get my program to compile and run correctly.

When I teach Ruby or JavaScript, we (almost) totally ignore the way that memory will be allocated, instead focusing on using the semantics of the language to do things that we care about as developers. It's possible that it's just a context difference - at summer camp or at a bootcamp, it's more obvious that we need to keep students engaged with the content and motivated, and therefore need to do use the language to do things we care about. Still, CS1 courses have a ton of students drop out every semester, so maybe they should take a page out of our book instead of the other way around.

## Conclusion

Cataloguing errors and developing a concept inventory seems like a great idea. This process for developing it seems like a valuable way of doing it. More teachers of more classes should develop concept inventories and diagnostic assessments, so that they can use them in the classroom to locate the common areas of confusion among their students.

It's also great to see CS Education researchers taking a page from other science teachers. There's a lot that teachers know about teaching (duh), and it's encouraging to see this kind of tools-and-techniques level cross-pollination.

Object Oriented programming and thinking about the computers' memory are hard, and I am personally suspicious of their importance when first learning CS syntax and semantics. They seem like discrete concepts that can be introduced later. Teaching them in CS1 means overloading and confusing students who are trying to learn how to accomplish simple tasks with while loops. This is really more of a general criticism of the structure and sequencing of CS1 courses, and explored more in the review of 
