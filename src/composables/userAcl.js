import { useRouter } from 'vue-router'
// ! Page Permission Control
//
const router = useRouter()

const useAcl = () => {
  console.log(router.getRoutes())
}

export {
  useAcl
}
