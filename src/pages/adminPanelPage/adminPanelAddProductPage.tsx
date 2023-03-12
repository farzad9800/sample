import React from 'react'
import { useParams } from 'react-router-dom'
import AdminPanelAddProductComponent from '../../features/adminPanel/adminPanelAddProductComponent'

const AdminPanelAddProductPage = () => {
  const params = useParams()
  console.log(params)

console.log("nekbat")

  return (
    <AdminPanelAddProductComponent />
  )
}

export default AdminPanelAddProductPage