import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
  const { id } = useParams() // Retrieve the project ID from the URL

  // Use the project ID in your component logic

  return (
    <div>
      <h2>Project Details</h2>
      <p>Lorem ipsum</p>
      {/* Rest of your component */}
    </div>
  )
}

export default ProjectDetails
