# Project Rules

## Engineering Standards

1.  **Test Driven Development (TDD)**
    *   **Scope**: All core logic (calculations, state management) MUST be developed using TDD.
    *   **Exclusion**: UI-specific code (DOM manipulation, animations) can be implemented directly but must be separated from core logic.
    *   **Process**: Red (Write failing test) -> Green (Write minimal code to pass) -> Refactor (Optimize and clean).

2.  **SOLID Principles**
    *   **Single Responsibility Principle (SRP)**: Classes and modules should have one reason to change. Separate Logic from View.
    *   **Open/Closed Principle (OCP)**: Code should be open for extension but closed for modification.
    *   **Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types.
    *   **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they do not use.
    *   **Dependency Inversion Principle (DIP)**: Depend on abstractions, not concretions.
