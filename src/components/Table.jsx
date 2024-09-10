import React, { useState,useEffect } from 'react';
import { Paper, Box, Typography, TextField, MenuItem, IconButton, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlagIcon from '@mui/icons-material/Flag';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios"
import { InputAdornment } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
const ResponsiveDataTable = () => {
  const [tabValue, setTabValue] = useState(0);
  const { data: datato, error, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const response = await axios.get('https://66dd75fcf7bcc0bbdcde2a03.mockapi.io/view/da398447-5804-4901-957a-08dccff0be01');
      return response.data;
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
    const headers = datato.headers;
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const renderSelectItems = (items) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '90%',width:"100%" }}>
      {items === "Organisation" &&datato.data?.map((item, index) => (
        item.nodes?.map((tabValue,index)=>(
        <FormControl
          key={ index} 
          fullWidth
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
        >
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={tabValue.id} 
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select': {
                paddingY: '8px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '0px',
              },
              '& .MuiSvgIcon-root': {
                right: 2,
                top: '-4px',
              },
            }}
          >
            <MenuItem value={tabValue.id}>{tabValue.id}</MenuItem>
          
          </Select>
        </FormControl>
      ))))} 
      {items === "Organisation_(t)" &&datato.data?.map((item, index) => (
        item.nodes?.map((tabValue,index)=>(
        <FormControl
          key={ index} 
          fullWidth
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
        >
      <div
  style={{
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '0px',
    position: 'relative',
    fontSize: '14px', 
    color: '#000', 
  }}
>
  <span style={{ flexGrow: 1 }}>
    {tabValue?.secondColumn || 'Select an option'} 
  </span>
</div>


        </FormControl>
      ))))}
     {items === "Department" && (
  <>
    <FormControl
      key="header"
      fullWidth
      size="small"
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '0px',
          position: 'relative',
          fontSize: '14px', 
          color: '#000', 
        }}
      >
        <span style={{ flexGrow: 1 }}>
          Utivid alle
        </span>
      </div>
    </FormControl>
    {datato.data?.map((item, itemIndex) =>
      item.nodes?.map((tabValue, tabValueIndex) => (
        tabValue.nodes?.map((tab, tabValueIndex) => (
          <FormControl
          key={ tabValueIndex} 
          fullWidth
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
        >
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={tab.value} 
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select': {
                paddingY: '8px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '0px',
              },
              '& .MuiSvgIcon-root': {
                right: 2,
                top: '-4px',
              },
            }}
          >
            <MenuItem value={tab.value}>{tab.value}</MenuItem>
            
            
          </Select>
        </FormControl>
      ))))
    )}
  </>
)}
     {items === "Department_(t)" && (
  <>
    <FormControl
      key="header" 
      fullWidth
      size="small"
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '0px',
          position: 'relative',
          fontSize: '14px', 
          color: '#000', 
        }}
      >
        <span style={{ flexGrow: 1 }}>
          Utivid alle
        </span>
      </div>
    </FormControl>
    {datato.data?.map((item, itemIndex) =>
      item.nodes?.map((tabValue, tabValueIndex) => (
        tabValue.nodes?.map((tab, tabValueIndex) => (
          <FormControl
          key={ tabValueIndex}
          fullWidth
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
        >
      <div
  style={{
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '0px',
    position: 'relative',
    fontSize: '14px', 
    color: '#000', 
  }}
>
  <span style={{ flexGrow: 1 }}>
    {tab?.secondColumn }
  </span>
</div>


        </FormControl>
      ))))
    )}
  </>
)}
     {items === "Project" && (
  <>
    <FormControl
      key="header" 
      fullWidth
      size="small"
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '0px',
          position: 'relative',
          fontSize: '14px',
          color: '#000',
        }}
      >
        <span style={{ flexGrow: 1 }}>
          Utivid alle
        </span>
      </div>
    </FormControl>
    {datato.data?.map((item, itemIndex) =>
      item.nodes?.map((tabValue, tabValueIndex) => (
        tabValue.nodes?.map((tab, tabValueIndex) => (
          tab.nodes?.map((tabtab, tabValueIndex) => (
          <FormControl
          key={ tabValueIndex}
          fullWidth
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
        >
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={tabtab.value} 
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select': {
                paddingY: '8px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '0px',
              },
              '& .MuiSvgIcon-root': {
                right: 2,
                top: '-4px',
              },
            }}
          >
            <MenuItem value={tabtab.value}>{tabtab.value}</MenuItem>
            
            
          </Select>
        </FormControl>
      ))))))
    )}
  </>
)}
    {items === "Team" && (
  <>
    <FormControl
      key="header" 
      fullWidth
      size="small"
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '0px',
          position: 'relative',
          fontSize: '14px', 
          color: '#000', 
        }}
      >
        <span style={{ flexGrow: 1 }}>
          Utivid alle
        </span>
      </div>
    </FormControl>
    <FormControl
      key="header" 
      fullWidth
      size="small"
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '0px',
          position: 'relative',
          fontSize: '14px', 
          color: '#000', 
        }}
      >
        <span style={{ flexGrow: 1 }}>
          Utivid alle
        </span>
      </div>
    </FormControl>
    {datato.data?.map((item, itemIndex) =>
      item.nodes?.map((tabValue, tabValueIndex) => (
        tabValue.nodes?.map((tab, tabValueIndex) => (
          tab.nodes?.map((tabtab, tabValueIndex) => (
            tabtab.nodes?.map((tabtab1, tabValueIndex) => (
          <FormControl
          key={ tabValueIndex} 
          fullWidth
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
        >
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={tabtab1.value} 
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select': {
                paddingY: '8px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '0px',
              },
              '& .MuiSvgIcon-root': {
                right: 2,
                top: '-4px',
              },
            }}
          >
            <MenuItem value={tabtab1.value}>{tabtab1.value}</MenuItem>
           
            
          </Select>
        </FormControl>
      ))))))))
    )}
  </>
)}

    </Box>
  );
  
  return (
    <Paper sx={{ overflow: 'hidden', width: '100%', boxShadow: 'none' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: "10px" }} display="flex" justifyContent="space-between" alignItems="center">
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: '#000',
              '&.Mui-selected': {
                color: '#1976d2',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#1976d2',
              height: '3px',
            },
          }}
        >
          <Tab label="STANDARD" />
          <Tab label="ONLY RENOVATION" />
        </Tabs>
        <IconButton size="small"><MoreVertIcon /></IconButton>
      </Box>
      
      <Box sx={{ overflowX: 'auto' }}>
        <Box sx={{ display: 'flex', minWidth: 'max-content' }}>
          <HeaderCell title="Area" value="area"/>
          {headers.map((header, index) => (
            <HeaderCell key={index} title={header} />
          ))}
          <HeaderCell title="Verdi" value="kr 737" />
        </Box>

        {datato.data.map((row, rowIndex) => (
          <Box key={row.id} sx={{ display: 'flex', minWidth: 'max-content', backgroundColor: rowIndex % 2 === 0 ? '#fff' : '#f5f5f5' }}>
            <DataCell>
              <Box sx={{ border: '1px solid #e0e0e0', padding: "8px", height: '100%' }}>
                <AreaContent row={row} />
              </Box>
            </DataCell>
            {headers.map((field) => (
              <DataCell key={field}>
                {renderSelectItems(field, row)}
              </DataCell>
            ))}
            <DataCell>
              <VertiContent row={row} />
            </DataCell>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

const HeaderCell = ({ title, value }) => (
  <Box sx={{ 
    flex: '1 0 0',
    width: '150px',
    padding: '12px',
    backgroundColor: '#f0f8ff',
    margin: '2px',
    borderRadius: '4px',
    border: "1px solid #e0e0e0"
  }}>
    <Typography variant="subtitle2" fontWeight="bold" sx={{ marginBottom: '8px' }}>
      {title}
    </Typography>
    
    {value === "area" ? (
      null
    ) : !value ? (
      <TextField
        size="small"
        placeholder="Skriv for å søke..."
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon style={{ color: 'gray' }} />
            </InputAdornment>
          ),
          sx: {
            '& .MuiInputBase-input::placeholder': {
              fontSize: '12px',
            },
            '& .MuiInputBase-root': {
              borderBottom: '1px solid #bdbdbd',
            },
          },
        }}
        fullWidth
      />
    ) : (
      <Typography variant="body1" fontWeight="bold">
        {value}
      </Typography>
    )}
  </Box>
);

const DataCell = ({ children }) => (
  <Box sx={{ 
    flex: '1 0 0',
    width: '150px',
    padding: '4px',
    margin: '1px',
  }}>
    {children}
  </Box>
);

const AreaContent = ({ row }) => (
  <>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
      <Typography 
        variant="body2" 
        sx={{
          fontWeight: 'bold',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '90%'
        }}
      >
        {row.name}
      </Typography>
      <IconButton size="small"><MoreVertIcon /></IconButton>
    </Box>
    <Box display="flex" alignItems="center" mb={1}>
      <Typography variant="body2" sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '90%'
      }}>{row.distributionKey?.name}</Typography>
      <IconButton size="small"><EditIcon sx={{ fontSize: 16 }} /></IconButton>
      <IconButton size="small"><DeleteIcon sx={{ fontSize: 16 }} /></IconButton>
    </Box>
    <Box display="flex" alignItems="center" mb={1}>
      <span style={{ width: 12, height: 12, backgroundColor: 'green', marginRight: 6, borderRadius: '50%' }}></span>
      <Typography variant="body2">{row.distributionKey?.name}</Typography>
    </Box>
    <Box display="flex" alignItems="center">
      <FlagIcon sx={{ fontSize: 16, marginRight: 1 }} />
      <FormControl fullWidth size="small">
        <Select
          value={row.selectedOption || ''}
          onChange={(e) => console.log(`Changed to ${e.target.value}`)}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#e0e0e0',
            },
            '& .MuiSelect-select': {
              padding: '4px 8px',
              fontSize: '14px',
            },
          }}
        >
          <MenuItem value={row.name}>{row.name}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  </>
);

const VertiContent = ({ row }) => (
    <>
    {row.nodes?.map((tabValue, index) => (
     <FormControl
     key={ index} 
     fullWidth
     size="small"
     sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
    >
    <div
    style={{
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '0px',
    position: 'relative',
    fontSize: '14px', 
    color: '#000',
    }}
    >
        <span style={{ flexGrow: 1 }}>
          kr {tabValue?.initialValue || 'N/A'}
        </span>
      </div>
      </FormControl>
    ))}
    </>
    );

export default ResponsiveDataTable;