---
layout: post
title: A Theory Of Instruction For Introductory Programming Skills (2019)
description: 
date: 2019-06-23T13:53:50-04:00
tags: [education, cs ed weekly, theory of instruction, introductory cs]
---

Today we're looking at [A Theory of Instruction For Introductory Programming Skills (2019)](/a-theory-of-instruction-for-introductory-programming-skills-xie-2019.pdf). 

Splitting up and sequencing the skills taught in introductory programming makes instruction more effective. 

## Introduction

The authors identify 4 discrete skills involved in learning to program:

- tracing code
- writing correct syntax
- recognizing abstract templates
- using templates to solve problems

Teaching these skills explicitly and sequentially ought to lower cognitive demand.

> 1) Learners will be more able to complete programming tasks
> 2) Learners will make fewer errors
> 3) Learners will have a greater understanding of the relationship between parts of the code and the overall purpose
> 4) Learners will be more engaged in the learning process

The authors designed and tested example materials with this explicit sequencing in mind. The results were, unsurprisingly, successful!

These results are well aligned with Cognitive Load Theory, recent summarized in [The Expertise Reversal Effect](/posts/2019-06-18-the-expertise-reversal-effect/). In particular, the authors work to limit cognitive load through careful sequencing, and seek to build learners' schemas and automaticity through deliberate practice. By avoiding overload, instructors should see better results as well a happier learning environment.

-- 

**Note: Templates, Chunks, Schemas**

*These are all different terms for more or less the same thing. Namely, a recipe or abstraction that can be used to solve problems. They're probably about the same as a mental model or a design pattern. They're the schemas of Cognitive Load Theory. Acquiring them and practicing them until their application is automatic reduces cognitive load. Xie et al. use the term 'templates', but other authors use other words. I use 'templates' here, for consistency with the paper.* 


## Current state of CS instruction

> Learners with no prior knowledge felt overwhelmed as they were asked to both trace and write code simultaneously. 

Research supports the notion that fundamental skills develop sequentially: tracing, explaining, and then writing code. Tracing is a prerequisite for explaining code. Tracing and explaining are prerequisites for writing.

CS instructional practices don't incorporate this finding. The authors suggest that this is because the research literature doesn't directly translate to a theory of instruction. My own guess is that most CS educators don't recognize that they are operating in a discipline where there's considerable pedagogical theory to be used in instructional design. Many are computer scientists first and teachers second, and haven't actually read the CS education literature.

The authors note [Szabo, Falkner, and Falkner (2014). Experiences in course design using neo-piagetian theory](https://dl.acm.org/citation.cfm?id=2674691) for recognizing the importance of teaching lower level skills - code reading and tracing in particular.

>  yet their course design was ambiguous and lacked practice and instruction for lower level skills. [...] Instead, learners experienced “objects in real life and their interactions” and that seems to have counted for those skill levels. Yet in their theory they defined those levels as relating to tracing ability at the sensorimotor level as “low abstraction level, can barely trace code” and pre-operational level “can reliably trace code, but cannot understand functionality”. This misalignment between the specifications in their theory of instructional design and the actual instructional design exists in other parts of the instruction as well.

Tracing and code reading ought to be taught explicitly, and taught before students are expected to write code. But they aren't taught in any courses, as far as the authors can tell. As soon as students can write code, there's plenty of practice for them, but while they're in the pre-writing stage, learners are unsupported by the instructional design.

This strikes me as true - almost all introductory CS and learn-to-code instruction focuses on getting students writing code as quickly as possible. It also seems like a a potential explanation for the high failure rate in CS1 courses - if many students start writing code before they can adequately trace code, they may spend the entire course building on a shaky foundation.

## Theory: separating, structuring, and sequencing programming skills

The theory itself is pretty straightforward. The authors build a 2x2 of fundamental skills. Reading and Writing on one axis, Semantics and Templates on the other.

Reading ought to come before Writing. Semantics ought to come before Templates.

They suggest the order:

**1. Reading Semantics**: tracing code, predicting the effect of syntax on behavior. Getting students to the level where they can read code and make predictions about things like the state of variables after certain lines have executed, the order of execution of lines. They should be able to describe what is happening on each line. Importantly left out at this level are the abilities to write correct syntax or understand the purposes of syntax in a larger context.

**2. Writing Semantics**: writing syntactically correct code. The authors take care to specify that tasks at this level ought to be _unambiguous_. Students are demonstrating the ability to turn small, clear descriptions into valid code. Other demonstrations might be recognizing and correcting invalid syntax, filling in missing pieces of valid syntax, or changing valid syntax to have another behavior. Students can't take an abstract problem and solve it using syntax, just produce valid syntax.

**3. Reading Templates**: Remember, Templates in this paper refer to patterns for solving problems. This level in the sequence focuses on reading and explaining the abstractions as they are used to solve problems. I think of this as starting to zoom out and see the forest, now that you've got a strong grasp on how the trees work. Demonstration looks like recognizing a template and its purpose. The authors offer the example of a student recognizing that some lines of code correspond to a 'variable swap template'. In my mind, questions at this level point to some lines of code and ask _"what's this for?"_ instead of _"what's this do?"_.

**4. Writing Templates**: 


Questions:
- how much bouncing back and forth between these levels ought there be?
- do these levels apply to each new construct, or to many constructs at once? We probably should move through these four phases whenever we introduce a new syntactical notion, not only once at the beginning of the course. (answered implicitly inline, for conditional statements)


## Experiment and Evaluation


## Endnotes

Overall, this paper was a little long-winded, and the study was underpowered for the claims it wanted to make. This is a little frustrating. The literature review is solid, the theory seems well-aligned with other things we know about teaching CS. I'll be watching for these authors to return with a bigger study implementing these ideas.

What's it mean for you?

Well, if you write documentation, you should keep this in mind! Start with an example of the syntax, then have a space for practicing the syntax, then have examples of using the syntax in patterns to solve problems, then provide opportunities to apply those patterns. Lots of documentation takes a very different sequencing approach: starting with the abstract patterns that the construct can solve, then showing those patterns in examples, then getting into behavior of the syntax. (Separately, documentation rarely affords chances to practice or check your understanding ☹️) 

If you are teaching someone something about programming (and you probably are in some ways, if you're reading this 😊), sequence your teaching this way! Start with the behavior of the syntax, then have the learner practice the syntax. Next you can get into reading examples of patterns solved using the syntax, and finally you can use the new construct to solve new, abstract problems.
