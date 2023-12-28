import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import "./home.css"
import { useToast } from '@chakra-ui/react'

export default function Home() {
  const toast = useToast()
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />

      </div>
    </>
  )
}
