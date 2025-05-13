import icon from './../assets/icon.jpg'
import './../assets/styles/loading.scss'

export default function Loading() {
  return (
    <view>
      <div className='loading'>
        <img src={icon} alt="logo" width='80px'/>
        <span className='text'>v1.0-a</span>
      </div>
      
      <span className='absolute subtitle'>Sitomnia</span>
    </view>
  )
}