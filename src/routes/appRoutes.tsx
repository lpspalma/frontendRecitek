import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import UploadPage from "../pages/upload/UploadPage";
import FiltersPageLayout from "../pages/filters/FiltersPageLayout";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ScheduledPage from "../pages/filters/ScheduledPage";
import AttemptPage from "../pages/filters/AttemptPage";
import CanceledPage from "../pages/filters/CanceledPage";
import BaseListPage from "../pages/baselist/BaseListPage";
import SchedulerPage from "../pages/scheduler/SchedulerPage";
import ManagementPage from "../pages/management/ManagementPage";

const appRoutes: RouteType[] = [

  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/upload",
    element: <UploadPage />,
    state: "upload",
    sidebarProps: {
      displayText: "Upload",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/filtros",
    element: <FiltersPageLayout />,
    state: "filters",
    sidebarProps: {
      displayText: "Filtros",
      icon: <FilterAltOutlinedIcon />
    },
    child: [
      {
        path: "/filtros/agendado",
        element: <ScheduledPage />,
        state: "filters.scheduled",
        sidebarProps: {
          displayText: "Agendado"
        },
      },
      {
        path: "/filtros/tentativa",
        element: <AttemptPage />,
        state: "filters.attempt",
        sidebarProps: {
          displayText: "Tentativa"
        },
      },
      {
        path: "/filtros/cancelado",
        element: <CanceledPage />,
        state: "filters.canceled",
        sidebarProps: {
          displayText: "Cancelado"
        }
      }
    ]
  },
  {
    path: "/listabase",
    element: <BaseListPage />,
    state: "baselist",
    sidebarProps: {
      displayText: "Lista Base",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/agendamento",
    element: <SchedulerPage />,
    state: "scheduler",
    sidebarProps: {
      displayText: "Agendamento",
      icon: <PermPhoneMsgOutlinedIcon />
    }
  },
  {
    path: "/gerenciamento",
    element: <ManagementPage />,
    state: "management",
    sidebarProps: {
      displayText: "Gerenciamento",
      icon: <ManageAccountsOutlinedIcon />
    }
  }

];

export default appRoutes;