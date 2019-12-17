routes = [
  {
    path: '/',
    componentUrl: './pages/index.html',
  },
  
  {
    path: '/about/',
    componentUrl: './pages/about.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/index/',
    componentUrl: './pages/index.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/eventos/',
    componentUrl: './pages/eventos.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/agregarEventos/',
    componentUrl: './pages/agregarEventos.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/agregarAuditorios/',
    componentUrl: './pages/agregarAuditorios.html',
    options: {
      transition: 'f7-parallax',
    },
  },
   {
    path: '/auditorios/',
    componentUrl: './pages/auditorios.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/tipo_evento/',
    componentUrl: './pages/tipo_evento.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/tipo_boleto/',
    componentUrl: './pages/tipo_boleto.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/organizador/',
    componentUrl: './pages/organizador.html',
    options: {
      transition: 'f7-parallax',
    },
  },
  
  // Default route, match to all pages (e.g. 404 page)
  {
    path: '(.*)',
    url: './pages/404.html',
  },
]
