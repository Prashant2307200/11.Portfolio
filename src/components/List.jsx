import { memo,Fragment } from 'react'

const List = ({ data, getKey, getRow }) => (
  <>
    { 
      data?.map((item,index) => (
        <Fragment key={getKey?.(item) ?? index}>
          {getRow(item)}
        </Fragment>
      )) 
    }
  </>
)

export default memo(List);
