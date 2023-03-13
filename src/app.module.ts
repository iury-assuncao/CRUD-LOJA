import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [UsuariosModule, ProdutosModule],
})
export class AppModule {}
