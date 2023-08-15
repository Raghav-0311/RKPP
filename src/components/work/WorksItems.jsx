import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt={item.title} className='work__img' />
        <div className="worksitem__tc-container">
            <h3 className="work__title">{item.title}</h3>
            <p className="work__caterory">{item.category}</p>
        </div>

        <div className="workitem__tech-container">
            <span className="work__tech-title">Tech:</span> {item.tech.map((index, techItem) => (
                <span className="work__tech-item" key={index}>{item.tech[techItem]}</span>
            ))}
        </div>

        <div className="worksitem__button-container">
            <a href={item.codeLink} className="work__button" target='_blank' rel='noreferrer'>
                View Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>

            <a href={item.demoLink} className="work__button" target='_blank' rel='noreferrer'>
                View Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    </div>
  )
}

export default WorksItems
