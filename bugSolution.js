```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The dependency array ensures this effect runs only when 'count' changes
    console.log('Count changed:', count);
  }, [count]); // Dependency array added

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```