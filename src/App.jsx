function App() {
  const name = 'StarFriends'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" />
          <h1>Meet the <i style={{color:"SteelBlue"}}>{name}</i> </h1>
          <p>Members of an <i>intergalactic alliance</i> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={()=> alert('Howdy')}>Say hello!</button>
        </hgroup>
      </article>
    </div>
  );
}
export default App
