import { type NextPage, type NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  if (!res && !err) return { statusCode: 404 }
  const statusCode = res?.statusCode ?? err?.statusCode
  return { statusCode }
}

export default Error
