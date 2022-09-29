import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Foo: NextPage = () => {
  return <div>Foo</div>;
}

export const getServerSideProps = withPageAuthRequired()

export default Foo
