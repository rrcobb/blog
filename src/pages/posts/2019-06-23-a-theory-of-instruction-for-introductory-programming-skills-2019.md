---
layout: post
title: A Theory Of Instruction For Introductory Programming Skills (2019)
description: 
date: 2019-06-23T13:53:50-04:00
tags: [education, cs ed weekly, theory of instruction, introductory cs]
---

Today we're looking at [A Theory of Instruction For Introductory Programming Skills (2019)](/a-theory-of-instruction-for-introductory-programming-skills-xie-2019.pdf). 

In a sentence: Splitting up and sequencing the skills taught in introductory programming makes instruction more effective. 

## Introduction

The authors identify 4 discrete skills involved in learning to program:

- Reading (tracing) code
- Writing correct syntax
- Recognizing abstract templates
- Using templates to solve problems

Teaching these skills explicitly and sequentially ought to lower cognitive demand.

> 1) Learners will be more able to complete programming tasks
> 2) Learners will make fewer errors
> 3) Learners will have a greater understanding of the relationship between parts of the code and the overall purpose
> 4) Learners will be more engaged in the learning process

The authors designed and tested example materials with this explicit sequencing in mind. The results were successful, but the sample size was tiny. ¯\\\_(ツ)_/¯.

These results are well aligned with Cognitive Load Theory, which we recently covered in [The Expertise Reversal Effect](/posts/2019-06-18-the-expertise-reversal-effect/). In particular, the authors work to limit cognitive load through careful sequencing, and they seek to build learners' schemas and automaticity through deliberate practice. By avoiding overload, instructors should see better results, as well a happier learning environment.

### Note: Templates, Chunks, and Schemas

These are all different terms for more or less the same thing. Namely, a template is a pattern, recipe, or abstraction that can be used to solve a set of common problems. Templates are probably more or less the same as mental models or design patterns. They're related to the _schemas_ of Cognitive Load Theory and the _chunks_ in the psychology of working memory. 

Learning templates and practicing them until their application is automatic reduces cognitive load. Xie et al. use the term 'templates', but other authors use other words. I use 'templates' in this summary, for consistency with the paper. 

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

**4. Writing Templates**: break down an ambiguous problem statement into pieces and successfully use templates to implement a solution. This builds on all the other skills - recognizing the template that's needed, writing correct syntax to actually apply the template.

### Motivation, Sequencing, and Spiraling

A thought nagged me when considering sequencing semantics before templates. How should we frame individual language constructs?

As an expert, it's easy to recognize the importance of, e.g., conditional statements or loops. As a beginner, it's hard to see the importance of those concepts, or be motivated by them - they don't mean anything yet. An effective strategy I've seen is to introduce a new construct in the context of a concrete, meaningful problem. For me, that often involves modeling the problem-solving process that I'd use to approach that real-world situation.

That mode (decomposing a problem into constituent parts) is the the fourth step of the sequence, suggesting the reverse of the proposed sequencing.

The authors address this directly:

> When learners write code to problem solve (such as in the example in the
> previous paragraph), they use skills relating to templates (S3, S4) before using
> skills related to semantics (S1, S2); this is backward relative to how we taught
> the skills. Teaching templates before semantics may better motivate problemsolving, but it can result in a problem-specific understanding of what constructs can do. To better support a more general understanding of what
> programming construct can do, we teach semantics before templates.

This might take a bit of chewing on.

Another question I had when reading this section was whether these were phases that beginners would go through in general as they learn programming, or whether these steps ought to apply each time learners are facing a new programming construct. How much spiral instruction or circling back should be incorporated into this sequence?

The authors don't address this question directly, but implicit in their instruction design is the notion that this sequence should apply each time we introduce a new syntax or construct - not only once at the beginning of a course. Maybe this means that we can spiral our way to motivating the concepts - frame with a concrete problem, then return to it after we've tackled the syntax.

## Example Materials, Experiment, and Evaluation

The paper diverges into a long description of the course materials developed. I can't sum it up here, but it's worth reading if you want to see an in-depth look at how curriculum design can explicitly take learning theory into account. Not only the new sequencing theory, either - referenced in the description of the curriculum are theories of metacognition, assessment, and research-driven strategies for introducing concepts and identifying misconceptions. 

Of note, the curriculum introduced skills like sketching solutions, made use of concrete tasks and concrete examples, and used different kinds of exercises to differentiate between misunderstandings at different levels. The authors ground their curriculum in theory and put it squarely in a pedagogical tradition by comparing it to other curricula.

The authors tested their curriculum with a small sample of students.

> After group assignment, we ended up with five participants in the experimental condition and four in the control condition.

This... isn't very impressive. The authors mention a bunch of potential confounds (more metacognitive material in the experimental group than the control, differences in prior knowledge and fixed mindset between experimental and control groups, etc). The authors make clear hypotheses and evaluations of them, but it's hard to take them as anything other than suggestive.

The big takeaway here is that testing educational theories is hard. I appreciate the dedication of the authors to actually trying things out, but this might have been better as a literature review and a separate study, rather than trying to jam them both together.

*Side note: Institutional Review Boards reviewing this kind of study seems like a waste of time and a big bureaucratic cost. Almost every CS course is experimental, in the sense that the results are not proven. The authors didn't do anything that's out of the ordinary for a CS classroom (or any other classroom), so it seems like this should be auto-approved. If you think I'm a crackpot and there's a good reason for an IRB to be involved in this kind of study, let me know your thoughts. Otherwise I'll go on shaking my fist at clouds...*

## Conclusion

What's it mean for you?

If you are teaching someone something about programming (and you probably are in some ways, if you're reading this 😊), consider sequencing your teaching this way! Start with the behavior of the syntax, then have the learner practice the syntax. Next go into reading examples of patterns solved using the syntax, and finally use the new construct to solve abstract problems.

Well, if you write documentation, you should keep this in mind! Start with an example of the syntax, then have a space for practicing the syntax, then have examples of using the syntax in patterns to solve problems, then provide opportunities to apply those patterns. Lots of documentation takes a very different sequencing approach: starting with the abstract patterns that the construct can solve, then showing those patterns in examples, then getting into behavior of the syntax. (Separately, documentation rarely affords chances to practice or check your understanding ☹️) 

Overall, this paper was a little long-winded, and the study was underpowered for the claims it wanted to make. This is frustrating! The theory seems well-aligned with other things we know about teaching CS, and I want to be more excited about sequencing instruction this way.

If you want to take a deeper look at the materials developed and how they incorporate theory, check out [the paper itself](/a-theory-of-instruction-for-introductory-programming-skills-xie-2019.pdf) and the [curriculum on github](https://github.com/codeandcognition/archive-2018cse-xie).

I'll be watching with hope for these authors to return with a bigger study answering the sequencing question more definitively.
