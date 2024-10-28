import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { usuarios } from '../../interfaces/users.interface';
import { usuario } from '../../interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {
  constructor(private httpClient: HttpClient) { }

  // Obtener todos los usuarios
  getUsuarios(): Observable<usuarios[]> {
    return this.httpClient.get<usuarios[]>(`${environment.apiUrl}/usuarios`);
  }

  // Registrar un nuevo usuario
  postUsuarios(newUsuario: usuario): Observable<usuario> {
    return this.httpClient.post<usuario>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  // Iniciar sesión

login(email: string, password: string): Observable<{ success: boolean, user?: any }> {
  return this.httpClient.get<usuarios[]>(`${environment.apiUrl}/usuarios`).pipe(
    map((usuarios: usuarios[]) => {
      const user = usuarios.find(u => u.email === email && u.password === password);
      return { success: !!user, user: user }; 
    })
  );
}
}
