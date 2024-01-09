import React from 'react'

export default function Question() {
  return (
    <div>Question
        <h1>Class Component Life Cycle:</h1>
        <div>
            <h2>Mounting Phase:</h2>
            <p>
            constructor(): This is the first method called when an instance of the class is created. It is used for initializing state and binding event handlers.
            </p>
            <p>render(): This method is responsible for rendering the component's UI.</p>
            <p>componentDidMount(): Invoked immediately after a component is inserted into the DOM. It's a good place to perform tasks like data fetching.</p>
        </div>
        <div>
            <h2>Updating Phase:</h2>
            <p>shouldComponentUpdate(nextProps, nextState): This method is called before rendering when new props or state are received. It can be used to prevent unnecessary re-rendering by returning false.</p>
            <p>render(): Re-render the component.</p>
            <p>componentDidUpdate(prevProps, prevState): Invoked immediately after the component is updated. It's suitable for performing side effects such as network requests.</p>
        </div>
        <div>
            <h2>Unmounting Phase:</h2>
            <p>componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed. It's used for cleanup tasks like canceling network requests or clearing up subscriptions.</p>
        </div>

        <h1>Functional Component with Hooks Life Cycle:
</h1>

<div>
    <h2>Mounting Phase:

</h2>
<p>useState(): Used to declare state variables.
</p>
<p>useEffect: The equivalent of componentDidMount and componentDidUpdate in a functional component. The function passed to useEffect is executed after the component is rendered. The empty dependency array ([]) ensures it only runs once after the initial render.
</p>
<h2>Updating Phase:

</h2>
<p>useEffect: If you provide a function without a second argument, it will run after every render. It's similar to componentDidUpdate.
</p>
<p>useState(): State can be updated using the setState function returned by useState.
</p>
<h2>Unmounting Phase:

</h2>
<p>useEffect: Similar to componentWillUnmount. The function returned in the cleanup phase of useEffect is executed when the component is unmounted.
</p>
</div>
        


    </div>
  )
}



