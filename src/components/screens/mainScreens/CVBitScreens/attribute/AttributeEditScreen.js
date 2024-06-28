import React, { useContext } from 'react'
import AttributeEditForm from '../cvBitForms/AttributeInterestPersonalSummaryEditForm'
import LoaderFullScreen from '../../../../common/LoaderFullScreen'
import { Context as AttributeContext } from '../../../../../context/AttributeContext'

const AttributeEditScreen = () => {
  //   const [id] = useState(navigation.getParam('id'))
  //   const [attribute] = useState(navigation.getParam('attribute'))

  const {
    state: { loading },
  } = useContext(AttributeContext)

  const renderContent = () => {
    if (loading || loading === null) return <LoaderFullScreen />
    return (
      <AttributeEditForm bit="attribute" />
      // <AttributeEditForm bit="attribute" id={id} incomingValue={attribute} />
    )
  }

  return renderContent()
}

export default AttributeEditScreen
