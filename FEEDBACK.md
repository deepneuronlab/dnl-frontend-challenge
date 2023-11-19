## What I used to learn the minimum about Vue
Since I had no prior experience with Vue, I had to learn the basic. So, I used the following resources:
 - Video that explains Vue from a REACT developer perspective: https://www.youtube.com/watch?v=sUH7PDUswio
 - The official Vue documentation: https://vuejs.org/guide/introduction.html
 - The official Vuetify documentation: https://vuetifyjs.com/en/components/explorer/
 - THe official Vuex documentation: https://vuex.vuejs.org

## What I struggled the most with and considerations
First, I'd like to say that I spent between 7/8 hours for this assignment, in which time I tried to get the grasp of Vue, and complete the challenge.

Then, I had some problem with node v18, which I have installed, thus I had to add a local dependency to node v16 and add a new script in package.json.

While trying to understand the basics of Vue, what I struggled the most was the amount of "huge" packages used in this project, and the need to understand them all at once: I understood that also Vuex and Vuetify were involved, thus adding a couple of layers of difficulties in understanding Vue.

Though, Vuex was not that hard because it remembers me a lot React Redux and the CQRS pattern used in C#, where the Read operations are the `getters` and the Write operations are the `mutations` and `actions`.

Honestly, I had more difficulties with Vuetify, also because I didn't find its documentation too much helpful. Also, I think that all the UI Frameworks have a learning curve that starts really high.

To conclude, I also had issues in setup VSCode to understands all the types in all the places, in fact I've used `any` in one occasion because I was struggling too much, but I also did not want to spend too much time on that.

To conclude, when playing with the basic Vue, I didn't find too much difficulties because a lot of concepts can be seen as 1:1 to React ones, therefore it's just a matter of keywords. The only big concept on which they differ is that, apparently, in Vue you can modify a parent "state" from the child, and the change will be propagated correctly, while instead in React the state flow is mono-directional.  
I read that this is obtained thanks to JavaScript proxy: I honestly believe this a feature that is REALLY missing in React, and I'm happy that Vue has such a thing. On the other side, it worries me a little that this might trigger barely predictable behaviors.

## Questions for you ( I might have google these, but I rather have a conversation with you guys :) )
 - Is it possible to type the events exposed by a component? For instance, `DataTableCompanies` emits the events `editItems` and `deleteItems`, but when the component is used in `TheCompanies`, intellisense will not hint those two events, and I guess it's because there is no type that provide that information. Though, is it possible to have that?
 - Are `mapGetters` called on command, or statically? I mean, suppose that those methods are long (for instance an API call): are the methods called when used, or on component setup?
 - Is there a way to catch the animation end of the `v-dialog`? I was trying to clean some variables on that event, but did not find a way.
 - Is it possible to have an arrow function when using the `@` keyword for adding an event handler? I mean, in `TheCompanies` component, when using `FormDialog` for adding a company, there is written:
    ```
    @close="closeAddCompanyDialogVisible"
    ```
    Which I understands calls the `closeAddCompanyDialogVisible` method.But I was wondering how or if it's possible to pass custom parameter via arrow function, like this:
    ```
    @close="e => closeAddCompanyDialogVisible(e, 'my Custom Parameter')"
    ```
    Not that I was needing it, but I tried several syntax, but I didn't find any way.
