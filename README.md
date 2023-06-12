LWC Important Topics

-------------------------------------------------------------------Communication Child to Parent(via Custom Events)
Parent-Child(or vice-versa) relationship forms between two components, when a component contains another component inside it.
Child component dispatches an event to trigger an update in the parent.
Edit the meta file of Parent to isExposed as true.
Write markup and js for the parent component.
Create a new Child component and then call it in the Parent Component(no need to edit meta xml file).
Write markup and js for the Child component.
Call Child in the parent component using the kebab case all in small letters.(c-a-b)

<c-child-to-parent-child> </c-child-to-parent-child>

Deploy child component first then parent component.
Create and dispatch custom events from the Child component.

addHandler() {
        this.dispatchEvent(new CustomEvent('add'));
    }


    subtractHandler() {
        this.dispatchEvent(new CustomEvent('subtract'));
    }


Handle dispatched custom events in Parent by prefixing with On.

<c-child-to-parent-child 
  onadd={handleIncrement}
  onsubtract={handleDecrement}
></c-child-to-parent-child>


Now define the handled event in the parent js file.
Deploy


--------------------------------------------------------------Communication Parent to Child
(via @api and this.template.querySelector.method)

To communicate from a parent component to a child component, the child exposes a property or function to make it public, then the parent can update the child's public property or call the child's public function.

Create theParent Component and write the markup and js file.
Expose the Parent component.
Create a child component.
Decorate properties with @api which need to be passed to the parent component.
Call Child component in Parent component.
Define @api method in child call that method in parent by using this.template.queryselector.methodname();
Deploy.


--------------------------------------------------------------Publisher Subscriber Model (unrelated component communication)


