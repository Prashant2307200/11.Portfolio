import { memo } from "react"


function Section({ id,heading,getComponent }) {
  return (
    <section className="section-padding" id={id}>
      <h1 className='section-heading'>
        {heading}
      </h1>
      <div className="section-b-border"></div>
      {getComponent()}
    </section>
  )
}

export default memo(Section);