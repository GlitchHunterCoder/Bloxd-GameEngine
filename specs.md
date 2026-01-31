# BLOXD ENGINE LAYERED ARCHITECTURE SPECIFICATION
> **"Bloxd io is a game engine."**
> This document defines the architectural model used to evolve Bloxd coding into a coherent, extensible game engine.
# 1. Core Philosophy
The architecture is **category-first**, not code-first.

> The categories define the code; the code never defines the categories.

This ensures:
- Long-term maintainability
- Aggressive refactor safety
- Freedom to redesign internals without breaking mental models
- Clear separation of concerns
# 2. The Triplet Pattern

The system is organized into **triplets of layers**. Each triplet operates at a similar conceptual altitude (low-level, high-level, UI, etc.), and each layer inside a triplet has a distinct role.

## Triplet Roles

Each triplet **T(N)** consists of:

1. **T(N).0 – Primitives**
  - Raw functionality
  - Minimal opinion
  - Direct mechanisms

2. **T(N).1 – System**
  - Cohesive machinery built on primitives
  - Enforces invariants and rules
  - Handles orchestration and lifecycle

3. **T(N).2 – Interface**
  - Stable, front-facing surface
  - Designed to be built upon
  - Abstracts internal complexity

# 3. Cross-Triplet Relationship (Important Clarification)

A critical clarification:

> **T(N).2 is NOT equal to T(N+1).0**

Instead:
- Each layer depends on the layer *directly below it*
- Higher triplets **build upon** the interface of the previous triplet
- Interfaces provide guarantees and capabilities, not identity

## Dependency Rule
- A layer may depend only **on layers below it**
- A layer should treat the previous layer as a **black box**
- Results, guarantees, and exposed functions flow upward

This prevents shortcut dependencies and architectural collapse.
# 4. Concrete Layer Definitions
## Triplet A – Low-Level Reality
### Layer 0 – Raw Primitives
- Native Bloxd API
- Callbacks
- Tick system
- Eval
- IU behavior

Characteristics:
- No structure
- No safety
- No guarantees
### Layer 1 – Async & Execution System
- Async Engine
- Task Scheduler (TS)
- Generator-based execution
- Time control
- Cleanup and interruption handling

Characteristics:
- Full system built on Layer 0
- Exists to tame raw behavior
- No game semantics

### Layer 2 – Low-Level Interface
Structured access to:
- Bloxd primitives
- Async Engine
- World / Player / Entity representations
- Deterministic handles
- Lifecycle-aware views

Characteristics:
- Civilized low-level API
- No high-level gameplay logic
- Foundation for higher abstractions
## Triplet B – Game Engine Logic
### Layer 3 – High-Level Primitives
- Structured logic APIs
- Event routing
- Callback attachment
- Command surfaces

Characteristics:
- First appearance of meaning
- Still un-orchestrated
- Thin wrappers over Layer 2
### Layer 4 – Game Engine System
- Reactive engine
- State systems
- Entity logic
- Zones, behaviors, orchestration

Characteristics:
- Core backend of the game engine
- Systems that maintain themselves
- Heavy use of async engine capabilities
### Layer 5 – Game-Facing Interface
- Stable scripting API
- Clean mental model for coders
- Engine-level guarantees

Characteristics:
- Primary surface for gameplay code
- Built for extension, not hacking previous layers
- Shields users from backend complexity
## Triplet C – Presentation (Optional Extension)
### Layer 6 – UI Primitives
- Raw UI hooks
- HUD access
- Rendering calls

### Layer 7 – UI System
- UI state engine
- Reactive UI
- Layout orchestration
### Layer 8 – UI Interface
- Declarative UI API
- Designer-friendly surface
# 5. Invariants (Non-Negotiable Rules)
- **No upward dependencies**
- **No cross-skipping layers**
- **Systems depend only on primitives below**
- **Interfaces are stable contracts**
- **Refactors must not violate layer guarantees**

# 6. Design Outcome
This architecture enables:
- Async-first programming
- Deterministic execution
- Reactive gameplay logic
- Clear mental models
- Engine-level scalability
Bloxd coding transitions from:

> *"a collection of callbacks"* into: **a structured, extensible game engine**

*This document defines the structure. Implementation must conform to it.*
