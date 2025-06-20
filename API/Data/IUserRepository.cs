namespace API.Data;

using API.DataEntities;
using API.DTOs;
using API.Helpers;

public interface IUserRepository
{
    public Task<IEnumerable<AppUser>> GetAllAsync();
    public Task<AppUser?> GetByIdAsync(int id);
    public Task<AppUser?> GetByUsernameAsync(string username);
    public Task<MemberResponse?> GetMemberAsync(string username);
    public Task<PagedList<MemberResponse>> GetMembersAsync(UserParams userParams);
    public void Update(AppUser user);
}