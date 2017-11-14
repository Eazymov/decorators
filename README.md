# @eazymov/decorators // IN PROGRESS

> Set of various decorators for javascript

[![npm](https://img.shields.io/npm/v/@eazymov/decorators.svg)](https://www.npmjs.com/package/vue-mce)
[![License](https://img.shields.io/npm/l/@eazymov/decorators.svg)](https://www.npmjs.com/package/vue-mce)
[![Build Status](https://travis-ci.org/Eazymov/decorators.svg?branch=master)](https://travis-ci.org/Eazymov/decorators)

## Installation

### Direct `<script />` include:

```html
<script src="https://cdn.jsdelivr.net/npm/@eazymov/decorators@latest/dist/decorators.min.js"></script>
```

### NPM

```bash
npm install @eazymov/decorators --save
```

### Yarn

```bash
yarn add @eazymov/decorators
```

## Examples

### @Benchmark

Parameters: no

Description: logs performance.now() before and after method execution

### @Describe

Parameters: `(descriptor: PropertyDescriptor) => PropertyDecorator & MethodDecorator`

Description: provides a possibility to exactly describe property or method

### @Freeze

Parameters: no

Description: applies Object.freeze to class instance

### @Mixin

Parameters: `(object: Object) => ClassDecorator`

Description:

### @Readonly

Parameters: no

Description: set `writable = false` to class property / method

### @Seal

Parameters: no

Description: applies Object.seal to class instance

### @SuppressErrors

Parameters: no

Description: suppress errors occuring during method execution

### @Validator

Parameters: `(validatorFunction: (...args: any[]) => boolean) => PropertyDecorator & MethodDecorator`

Description: fires before assigning a class property, if `validatorFunction` returns true, the value changes, otherwise it doesn't

### @Watch

Parameters: any function

Description: fires provided function whenever class property changes
