const React = require('react')

module.exports = function Product(props) {
  console.log("DETAIL POST GOES HERE!============================")
  console.log(props.route);
  console.log("END OF DETAIL POST GOES HERE!============================")
	console.log("PARAMS DETAIL POST GOES HERE!============================")
	console.log(props.route.params)
	console.log("END OF PARAMS DETAIL POST GOES HERE!============================")
  let post = props.route.list_posts.find(post => post.slug === props.params.id)
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p><a href={post.link} target="_blank">Continue reading...</a></p>
    </div>
  )
}