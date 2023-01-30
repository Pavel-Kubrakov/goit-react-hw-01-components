import description from "../ProfileDescription/Description.module.css"

export const Description = function ({avatar, name, tag, location}){
return( 
    <div className={description.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={description.avatar}
    />
    <p className={description.name}>{name}</p>
    <p className={description.tag}>@{tag}</p>
    <p className={description.location}>{location}</p>
  </div>
    )
}