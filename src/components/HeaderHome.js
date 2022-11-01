import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import imagen from '../../public/image.jpg'
import Image from 'next/image'

const drawerWidth = 240;
const navItems = ['Login', 'Register'];


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        INSTITUTO ILHA DO SEMEADOR
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            textAlign={'center'}
            sx={{ flexGrow: 1, color: '#000000',display: { xs: 'none', sm: 'block' } }}
            >
            INSTITUTO ILHA DO SEMEADOR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000000' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Image 
                src={imagen} alt = "imagem teste"
                width={500}
                height={400}

            />
        <Typography paragraph variant='h6' sx={{marginTop: 3}}>
         APRESENTAÇÃO INSTITUCIONAL
        </Typography>
        <Typography paragraph>
          O Instituto Ilha do Semeador, ou simplesmente denominado “Ilha do
          Semeador”, é uma organização da sociedade civil, sem fins lucrativos, fundada em
          23/11/2011, no município de Presidente Figueiredo – Amazonas, pelo pastor Clécio
          Adilson dos Santos Bruno, sob a denominação “Projeto Amigos de Deus”, que durante
          anos ajudou de maneira individual a reabilitar dependentes de drogas, álcool ou
          qualquer outra substância química, oferecendo tratamento de forma gratuita a mais de
          (100) cem pessoas do sexo masculino, com idade etária entre 18 a 59 anos, advindos
          de todos os municípios do Estado do Amazonas.
        </Typography>
        <Typography paragraph>
          Em meados de 2012, o também pastor e missionário José Hamilton Ribeiro
          Pinheiro, conhece o então “Projeto Amigos de Deus”, em busca de procurar ajuda para o
          irmão Flávio Ribeiro Pinheiro pelo uso abusivo de drogas, na Casa Abrigo instalada em
          uma com acesso fluvial. Após o sucesso de sua reabilitação, os irmãos passaram a
          contribuir de forma voluntária com as atividades relativas ao tratamento de dependes
          químicos. Infelizmente, no ano de 2017 o então ex adictos e Coordenador da Casa
          Abrigo Flávio Ribeiro Pinheiro, faleceu vítima de um câncer na tireoide.
        </Typography>
        <Typography paragraph>
          Frente ao exposto, a trajetória do pastor e missionário José Hamilton Ribeiro
          Pinheiro, se intensifica e ganha força com o falecimento de seu irmão, na luta pelo
          combate as drogas e outras mazelas sociais. Recebendo o convite para assumir
          oficialmente a presidência da instituição no ano de 2021, mudando sua denominação
          para “Instituto Ilha do Semeador”.
        </Typography>
        <Typography paragraph>
          Esta gestão também traça como prioridade para o ano de 2022, a expansão de
          seu raio de atendimento as minorias sociais residentes no município de Presidente
          Figueiredo e comunidades adjacentes, desenvolvendo projetos no âmbito da Proteção
          Social Básica, de Média e Alta Complexidade, pautados de acordo com a Política
          Nacional de Assistência Social (PNAS), Norma Operacional Básica (NOB/SUAS) e
          Tipificação dos Serviços Socioassistenciais, voltados para o atendimento a famílias e
          indivíduos em situação de risco e vulnerabilidade social.
        </Typography>
        <Typography paragraph>
          Assim, o Instituto Ilha do Semeador busca atuar e intervir dentro de sua própria
          zona de abrangência como órgão articulador de políticas públicas, contribuindo de forma
          articulada e integrada com os diversos serviços, órgãos e instituições comprometidas
          com a efetivação dos direitos sociais.
        </Typography>
        <Typography paragraph variant='h6'>
          NOSSO NOME E INSPIRAÇÃO
        </Typography>
        <Typography paragraph>
          A inspiração para o nome da organização, está intrinsicamente ligada ao local em
          que ocorre o funcionamento de seu primeiro projeto, em uma “ilha” as margens do Lago
          do Cacaia – Comunidade Rumo Certo, distante cerca de 66km do município de
          Presidente Figueiredo. Nesta Ilha, ao longo dos anos o Instituto vem semeando: a
          palavra de Deus, o amor ao próximo, promovendo a promoção espiritual e social de
          seus assistidos e principalmente colhendo bons frutos com a reabilitação de
          dependentes químicos e sua reinserção social. Deste modo, surge o nome Instituto “Ilha
          do Semeador”.
        </Typography>
        <Typography paragraph>
          MISSÃO
        </Typography>
        <Typography paragraph>
          Fortalecer a evolução de politicas públicas de combate a pobreza e inclusão social
          voltados para familias e indíviduos em situção de risco pessoal e social, desenvolvendo projetos,
          programas e serviços que visem a transformação social destes sujeitos de direitos.
        </Typography>
        <Typography paragraph>
          VISÃO
        </Typography>
        <Typography paragraph>
          Consolidar-se como uma instituição de excelência e referencia na prestação de serviços
          e atendimentos a familias e individuos que estejam em situação de risco pessoal e social,
          assegurando e garantido seus direitos sociais. Compartilhando experiências com organizações
          congêneres e influenciando políticas públicas, a fim de ampliar o impacto social de suas ações
          e fortalecer a rede de proteção social.
        </Typography>
        <Typography paragraph variant='h6'>
          SERVIÇOS OFERTADOS NO MUNICIPIO
        </Typography>
        <Typography paragraph>
          ASSISTÊNCIA SOCIAL
        </Typography>
        <Typography paragraph>
          PROTEÇÃO SOCIAL BÁSICA: O Instituto Ilha do Semeador apresentará no primeiro
          semestre de 2021 o projeto “ Sementes do Amanhã – “Mais proteção, Menos Violência”, cujo
          objetivo será, promover a participação efetiva de (100) crianças e adolescentes, com a faixa
          etária entre 06 a 16 anos, que estejam em situação de risco social e pessoal em atividades
          socioeducativas direcionadas ao fortalecimento da sua autoestima, confiança, expressão da
          violação dos seus direitos e ações educativas, formativas culturais e esportivas, envolvendo
          ainda suas respectivas famílias e um conjunto de organizações locais entre entidades
          comunitárias, gestores públicos, conselho tutelar e moradores na perspectiva de formar uma
          Rede de Proteção atuante no Município.
        </Typography>
        <Typography paragraph>
          PROTEÇÃO SOCIAL DE ALTA COMPLEXIDADE: O Projeto “Ilha do Semeador” tem
          como objetivo a prevenção universal ao uso indevido de drogas, o tratamento e a reinserção
          social do dependente químico oferecendo acolhimento, amparo e atendimento aqueles que
          direta ou indiretamente sofrem com transtornos decorrentes do uso ou abuso de álcool ou
          outras drogas. Oferece atendimento também às famílias que estão em situação de
          vulnerabilidade social, bem como atendimentos pontuais de equipe multidisciplinar.
        </Typography>
      </Box> 
    </Box>
    


);
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default DrawerAppBar;
        
