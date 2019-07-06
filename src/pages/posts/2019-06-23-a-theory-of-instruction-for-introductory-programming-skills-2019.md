---
layout: post
title: A Theory Of Instruction For Introductory Programming Skills (2019)
description: 
date: 2019-06-23T13:53:50-04:00
tags: [education, cs ed weekly, theory of instruction, introductory cs]
---

Today we're looking at [A Theory of Instruction For Introductory Programming Skills (2019)](/a-theory-of-instruction-for-introductory-programming-skills-xie-2019.pdf). 

Splitting up and sequencing the skills taught in introductory programming makes instruction more effective. 

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

Notes:
- skills develop sequentially: tracing, explaining, writing
- tracing is a prerequisite for explaining code
- tracing and explaining are necessary for writing
- cs instruction doesn't actually recognize this, maybe because the studies that found these didn't directly translate to a theory of instruction
  - instruction usually doesn't take theory into account. Not obvious exactly why this is, authors say it's a failure of the studies
  - my own guess is that most CS educators don't recognize that they are operating in a discipline where there's considerable history and pedagogical theory
  - many are computer scientists first and teachers second, or view education research as less high-status than CS research

The authors note [Szabo, Falkner, and Falkner (2014). Experiences in course design using neo-piagetian theory](https://dl.acm.org/citation.cfm?id=2674691) for recognizing the importance of teaching lower level skills - code reading and tracing in particular.

>  yet their course design was ambiguous and lacked practice and instruction for lower level skills. [...] Instead, learners experienced “objects in real life and their interactions” and that seems to have counted for those skill levels. Yet in their theory they defined those levels as relating to tracing ability at the sensorimotor level as “low abstraction level, can barely trace code” and pre-operational level “can reliably trace code, but cannot understand functionality”. This misalignment between the specifications in their theory of instructional design and the actual instructional design exists in other parts of the instruction as well.

Tracing and code reading ought to be taught explicitly. But they aren't taught in any courses, as far as the authors can tell. As soon as students can write code, there's plenty of practice for them, but while they're in the pre-writing stage, learners are unsupported by the instructional design. This strikes me as true and as a potential explanation for the high failure rate in CS1 courses.


## Theory: separating, structuring, and sequencing programming skills

Reading, writing, semantics, templates

### Read before write

### Semantics before templates


## Experiment and Evaluation


## Endnotes

Overall, this paper was a little long-winded, and the study was underpowered for the claims it wanted to make. This is a little frustrating. The literature review is solid, the theory seems well-aligned with other things we know about teaching CS. I'll be watching for these authors to return with a bigger study implementing these ideas.

