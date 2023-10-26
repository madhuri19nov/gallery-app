// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailAltText, thumbnailUrl, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbNail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumb-nail-item">
      <button
        className="thubnail-button"
        type="button"
        onClick={onClickThumbNail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
