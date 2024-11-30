import './icon.scss'

function LineIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className='icon_plus'>
        <span className='icon_plus_ngang'></span>
        {!isOpen ? <span className='icon_plus_doc'></span> : null}
    </div>
  )
}

export default LineIcon;
