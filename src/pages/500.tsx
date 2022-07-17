import * as React from 'react'
import PageLayout from '@/layouts/PageLayout'

const InternalServerErrorPage = () => {
  return (
    <PageLayout
      head={{
        title: '500',
        type: 'website',
        description: '500 page of zuruzuru',
        url: '/500',
      }}
    >
      <h1>⚠️ Internal Server Error</h1>
      <p>
        サーバーで何か問題が起きています。しばらくしてからもう一度訪問してください。
      </p>
    </PageLayout>
  )
}

export default InternalServerErrorPage
