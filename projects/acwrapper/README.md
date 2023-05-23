# Acwrapper

Acwrapper is angular component wrapper project. In most cases angular smart components have 4 states: content, loader, exception, empty states.
This project provides customizable basic component with realized all of this states. You can create your own template for every state and put it in this component.

## Install

You can run this command in your terminal

```bash
$ npm install acwrapper --save-dev
```

## Usage

Import wrapper module to your module

```ts
import { WrapperModule } from 'acwrapper'; //here

@NgModule({
  declarations: [
    YourComponent
  ],
  imports: [
    WrapperModule //here
  ],
  providers: [],
  bootstrap: [YourComponent]
})
export class YourModule { }

```

Add state property to your component

```ts
import { Component } from '@angular/core';
import { ComponentState } from 'acwrapper';

@Component({
  selector: 'your-component',
  templateUrl: './your-component.component.html'
})
export class YourComponent {
  /**
   * If you want use enum in html
   */
  public COMPONENT_STATE = ComponentState;

  /**
   * for state you can use ComponentState enum or 'content' | 'loader' | 'error' | 'empty' values
   */
  public state: ComponentState | 'content' | 'loader' | 'error' | 'empty' = ComponentState.Content;
}

```

### Simple wrapper

Add component to html

```html

<h1>Example 1. Simpliest wrapper</h1>

<acw-wrapper [state]="state">
    Wrapper content
</acw-wrapper>

<h1>Example 2. Using attributes</h1>

<acw-wrapper 
    [state]="state"
    content="Wrapper content"
    loadingMessage="Loader message"
    emptyMessage="'Empty' state content"
    errorMessage="'Error' state content">
</acw-wrapper>

```

### Wrapper with templates

import template directive to your module

```ts
import { TemplateModule, WrapperModule } from 'acwrapper'; //here

@NgModule({
  declarations: [
    YourComponent
  ],
  imports: [
    WrapperModule,
    TemplateModule //here
  ],
  providers: [],
  bootstrap: [YourComponent]
})
export class YourModule { }

```

Add component to html

```html

<h1>Example 3. Templates driven wrapper</h1>

<acw-wrapper [state]="state">
    <ng-template acwTemplate="content">
        <p>Your own "content" template</p>
    </ng-template>

    <ng-template acwTemplate="loader">
        <p>Your own "loader" template</p>
    </ng-template>
    
    <ng-template acwTemplate="empty">
        <p>Your own "empty" template</p>
    </ng-template>
    
    <ng-template acwTemplate="error">
        <p>Your own "error" template</p>
    </ng-template>
</acw-wrapper>

```

### Create own custom wrapper based on basic wrapper

Extend your component from BaseWrapperComponent, implement astract properties

```ts

import { Component, Input } from '@angular/core';
import { BaseWrapperComponent, ComponentState } from 'acwrapper'; //add this line

@Component({
  selector: 'your-component',
  templateUrl: './your-component.component.html'
})
export class YourComponent extends BaseWrapperComponent { //Extend youe component from BaseWrapperComponent  
  private _state: ComponentState | string = ComponentState.Content;
  
  //implement abstract properties
  @Input() public set state(value: ComponentState | string){
    this._state = value;
  }
  
  public get state(): ComponentState | string {
    return this._state;
  }
}


```

```html

<h1>Example 4. Custom wrapper based on default wrapper</h1>

<acw-wrapper [state]="state">    
    <ng-template acwTemplate="content">
        <div>
            <h1>Your customcontent template</h1>            
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            <ng-content></ng-content>
        </div>
    </ng-template>

    <ng-template acwTemplate="loader">
        <ng-container *ngTemplateOutlet="loaderTemplate"></ng-container>
    </ng-template>
    
    <ng-template acwTemplate="empty">
        <ng-container *ngTemplateOutlet="emptyTemplate"></ng-container>
    </ng-template>
    
    <ng-template acwTemplate="error">
        <ng-container *ngTemplateOutlet="errorTemplate"></ng-container>
</acw-wrapper>

```
