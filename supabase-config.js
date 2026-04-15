// ============================================
// CONFIGURACIÓN DE SUPABASE
// Reemplaza estos valores con los de tu proyecto
// ============================================
const SUPABASE_URL = 'https://gygblvqgbvqjipalpsda.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5Z2JsdnFnYnZxamlwYWxwc2RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3OTU3ODksImV4cCI6MjA5MTM3MTc4OX0.b5v7iYGMEgHNefUeHKkkZWuxjw-2Jd9VjB8F-uUl3yo';

// ============================================
// ESQUEMA SQL PARA SUPABASE
// Ejecuta esto en el SQL Editor de Supabase:
// ============================================
/*
-- Tabla de productos
CREATE TABLE productos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  precio NUMERIC(10,2) NOT NULL,
  stock INTEGER DEFAULT 0,
  categoria TEXT,
  imagen_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de clientes (perfil extendido)
CREATE TABLE clientes (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  nombre_completo TEXT NOT NULL,
  usuario TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de pedidos
CREATE TABLE pedidos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cliente_id UUID REFERENCES clientes(id),
  total NUMERIC(10,2) NOT NULL,
  estado TEXT DEFAULT 'pendiente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de items del pedido
CREATE TABLE pedido_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  pedido_id UUID REFERENCES pedidos(id),
  producto_id UUID REFERENCES productos(id),
  cantidad INTEGER NOT NULL,
  precio_unitario NUMERIC(10,2) NOT NULL
);

-- Habilitar RLS
ALTER TABLE productos ENABLE ROW LEVEL SECURITY;
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE pedidos ENABLE ROW LEVEL SECURITY;
ALTER TABLE pedido_items ENABLE ROW LEVEL SECURITY;

-- Políticas públicas para productos (lectura)
CREATE POLICY "Productos visibles para todos" ON productos FOR SELECT USING (true);

-- Políticas para clientes
CREATE POLICY "Clientes pueden ver su perfil" ON clientes FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Insertar perfil propio" ON clientes FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas para pedidos
CREATE POLICY "Ver pedidos propios" ON pedidos FOR SELECT USING (auth.uid() = cliente_id);
CREATE POLICY "Crear pedidos propios" ON pedidos FOR INSERT WITH CHECK (auth.uid() = cliente_id);

-- Para dashboard admin: productos (insertar/actualizar/eliminar)
CREATE POLICY "Admin puede gestionar productos" ON productos FOR ALL USING (true);
*/
