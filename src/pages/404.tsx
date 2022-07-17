import * as React from 'react'
import PageLayout from '@/layouts/PageLayout'

const NotFoundPage = () => {
  return (
    <PageLayout
      head={{
        title: '404',
        type: 'website',
        description: '404 page of zuruzurura.men',
        url: '/404',
      }}
    >
      <h1>Page Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
    </PageLayout>
  )
}

export default NotFoundPage
