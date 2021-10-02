const Post = ({ post }) => {
    return (
        <div>
            <p>{post.post.title}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://dn.wcprojects.in/api/all/posts')
    const posts = await res.json()
    const paths = posts.map((post) => ({
      params: {slug: post.slug}
    }))
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://dn.wcprojects.in/api/english/post/${params.slug}`)
    const post = await res.json()
    return { props: { post } }
  }
  
  
  export default Post