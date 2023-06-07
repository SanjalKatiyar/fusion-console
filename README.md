# Fusion Console

## Conding styles

### File and folder naming conventions

> As a general rule of thumb, file and folder names should follow the camelCase naming rule. In a React project these files would usually have the extensions `.ts, .js, .scss, .json, .yaml`

- React components should follow the PascalCase for their file name, the Directory where they live and the actual component name. File extension for React components should be `.tsx`

  Example of a component file/folder structure:

  ```bash
  /src/components/Component
    index.ts #exports component
    Component.tsx
    component.scss
    ...
  ```

---

### Coding naming conventions

> Following a similar general rule of thumb as the files/folder naming rules, naming variables, parameters and functions should follow the camelCase.

- Functions (including arrow functions) can be defined using either camelCase or PascalCase. The latter should be reserved for React components only.

  Example:

  ```ts
  function ComponentName(){
    ...
  }

  const AnotherComponent = () => {
    ...
  }

  function useHook(){
    ...
  }

  const handleInput = () => {
    ...
  }
  ```

- Variables defined using `const` can be defined using camelCase, PascalCase (React components only) or UPPER_CASE.

- Boolean type variables should have one of the following words as a prefix: `['is', 'should', 'has', 'can', 'did', 'will']`

  Example:

  ```ts
  const isOpen: boolean;
  ```

- Types should be defined using PascalCase and have a `T` prefix.

  Example:

  ```ts
  type TComponentProps = {
    ...
  };
  ```

- Enums should be defined using PascalCase.

  Example:

  ```ts
  enum UserResponse {
    ...
  }
  ```

- Quoted parameters: There is an exception rule configured in eslintrc for properties that need to be set using quotes.

> Eslint rules are configured to ensure these naming conditions are enfoced.
