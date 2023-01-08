import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/filters/DefaultPage";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/filters/ScheduledOrdersPage";
import SaasPage from "../pages/filters/UnsuccessOrdersPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import ManagementPage from "../pages/installation/ManagementPage";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import FilterPageLayout from "../pages/filters/FilterPageLayout";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterIndex from "../pages/filters/FilterIndex";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/gerenciamento",
    element: <ManagementPage />,
    state: "gerenciamento",
    sidebarProps: {
      displayText: "Gerenciamento",
      icon: <ManageAccountsOutlinedIcon />
    }
  },
  {
    path: "/filtros",
    element: <FilterPageLayout />,
    state: "filter",
    sidebarProps: {
      displayText: "Filtros",
      icon: <FilterAltOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <FilterIndex />,
        state: "filter.index"
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytic"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Saas"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Alert"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Button"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;