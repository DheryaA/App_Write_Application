
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


function PostCard({
    $id, title, image
}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img 
                    className='rounded-xl'                    
                    src={appwriteService.getFilePreview(image)} alt={title}/>
                </div>
                <h2
                className='text-xl font-bold'                
                >{title}</h2>
            </div>
        </Link>
    )
}
PostCard.propTypes = {
    $id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
export default PostCard
