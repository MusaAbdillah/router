const {Link} = require('react-router')
const React = require('react')

module.exports = function Posts(props) {
console.log("===========================")
console.log(props.route.list_posts)  
console.log("===========================")  
  return <div>Posts
    <ol>
    {props.route.list_posts.map((post, index)=>
      <li key={post.slug}><Link to={`/posts/${post.slug}`} >{post.title}</Link></li>
    )}
    </ol>
  </div>
}